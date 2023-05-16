import { useCallback, useEffect, useReducer, useState } from 'react';



import { AdminResourceOverview, ResourceTypes } from '@src/types/dashboard/AdminDashboard';
import { ResourceStatusTypes } from '@src/types/dashboard/TeamDashboard';
import { TSSFReducer } from '@src/types/hooks/useAdminResources';

export const StatusFilterList: ResourceStatusTypes[] = [
  'pending',
  'failed',
  'running',
  'succeeded',
  'unknown',
];

export const useAdminResources = () => {
  const [resources, setResources] = useState<AdminResourceOverview[]>([]);

  const SSFReducer: TSSFReducer = (state, action) => {
    switch (action.type) {
      case 'resources': {
        return { ...state, resources: action.payload };
      }
      case 'status': {
        return { ...state, status: action.payload };
      }
      case 'sort': {
        const { descriptor, direction } = action.payload ?? {};
        return { ...state, sortDescriptor: descriptor, sortDirection: direction };
      }
      case 'search': {
        return { ...state, search: action.payload };
      }
    }
  };

  const [SSFState, SSFDispatch] = useReducer<TSSFReducer>(SSFReducer, {
    resources: new Set(['application']) as Set<ResourceTypes>,
    status: new Set(StatusFilterList),
  });

  const [apiLoading, setAPILoading] = useState(true);
  const [apiError, setAPIError] = useState(false);

  // ON SSFState Update
  useEffect(() => {
    const { resources, sortDescriptor, sortDirection, search } = SSFState;

    setAPILoading(true);

    fetch(
      `/api/iam/team/0/resources?filter=${Array.from(resources).join(',')}${
        search ? `&search=${search}` : ''
      }${sortDescriptor ? `&sortDescriptor=${sortDescriptor}` : ''}${
        sortDirection ? `&sortDirection=${sortDirection}` : ''
      }`,
    )
      .then((res) => res.json())
      .then((res) => {
        setResources(res.resources);
      })
      .catch(() => setAPIError(true))
      .finally(() => setAPILoading(false));
  }, [SSFState]);

  const SearchProject = useCallback((searchText: string) => {
    SSFDispatch({
      type: 'search',
      payload: searchText,
    });
  }, []);

  return [{ resources }, { SSFState, SSFDispatch, SearchProject }, apiLoading, apiError] as const;
};