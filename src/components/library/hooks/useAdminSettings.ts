import { useEffect, useState } from 'react';

import { GlobalSettingsType, SSHKeyInfoType } from '@src/types/dashboard/AdminSettings';

interface APISettingsResponse {
  settings?: GlobalSettingsType;
  certificates?: any[];
  sshKeys?: SSHKeyInfoType[];
}

/**
 * Used to retrieve, refetch Admin Settings
 */
export const useAdminSettings = ({ settings, certificates, sshKeys }: APISettingsResponse) => {
  const [fetchedSettings, setFetchedSettings] = useState<APISettingsResponse>({
    settings,
    certificates,
    sshKeys,
  });

  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (refetch) {
      setRefetch(false);

      const getUpdatedSettings = async () => {
        try {
          const res = await fetch(`/api/settings`);

          if (res.ok) {
            const newSettings = await res.json();
            setFetchedSettings(() => newSettings);
          }
        } finally {
        }
      };
      getUpdatedSettings();
    }
  }, [refetch]);

  const TriggerRefetch = () => setRefetch(true);

  return [fetchedSettings, TriggerRefetch] as const;
};
