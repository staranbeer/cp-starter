import { useCallback, useEffect, useState } from 'react';

/**
 * 
 * There are several data structures that can be used to handle logs with message and time.
 * Our UseCase: Assuming, usually new logs coming in are already in chronological order, but this is not guaranteed as seen by directly querying loki
   1. Linked List - insert in our case is almost always o(n)
   2.Balanced Binary Search Tree - insert in our case is almost always o(1)
   3.Priority Queue with Heap 
*/
export class LogEntry {
  constructor(public message: string, public timestamp: bigint) {}
}

export class LogTreeNode {
  constructor(
    public logEntry: LogEntry,
    public left: LogTreeNode | null = null,
    public right: LogTreeNode | null = null,
  ) {}
}

/**
 *
 * @returns functions to get and add logs
 */
export function useLogHandler(initialLogs?: { message: string; timestamp: string }[]) {
  const [root, setRoot] = useState<LogTreeNode | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const inorderTraversal = useCallback(function (
    node: LogTreeNode | null,
    callback: (logEntry: LogEntry) => void,
  ) {
    if (node !== null) {
      inorderTraversal(node.left, callback);
      callback(node.logEntry);
      inorderTraversal(node.right, callback);
    }
  },
  []);
  const insert = useCallback(function (node: LogTreeNode | null, logEntry: LogEntry): LogTreeNode {
    if (node === null) {
      return new LogTreeNode(logEntry);
    }
    if (logEntry.timestamp <= node.logEntry.timestamp) {
      if (
        logEntry.message === node.logEntry.message &&
        logEntry.message === node.logEntry.message
      ) {
        return node;
      }
      node.left = insert(node.left, logEntry);
    } else {
      node.right = insert(node.right, logEntry);
    }
    return node;
  }, []);

  const clearLogs = useCallback(function () {
    setRoot(null);
  }, []);

  const getLogs = useCallback(
    function (node: LogTreeNode | null): LogEntry[] {
      const logs: LogEntry[] = [];
      inorderTraversal(node, (logEntry) => {
        logs.push(logEntry);
      });
      return logs;
    },
    [inorderTraversal],
  );

  useEffect(() => {
    if (initialLogs) {
      let tempRoot = root;
      for (const { message, timestamp } of initialLogs) {
        tempRoot = insert(tempRoot, { message, timestamp: BigInt(timestamp) });
      }
      setRoot(tempRoot);
      setLogs(getLogs(tempRoot));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLog = useCallback(
    (message: string, timestamp: string) => {
      const logEntry = new LogEntry(message, BigInt(timestamp));
      setRoot(insert(root, logEntry));
      setLogs(getLogs(root));
    },
    [root, getLogs, insert],
  );

  return {
    addLog,
    clearLogs,
    getLogs,
    root,
    logs,
  };
}
