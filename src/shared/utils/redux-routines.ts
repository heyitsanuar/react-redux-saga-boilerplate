import { RoutineReducer } from './redux-routines.d';

function replaceEndpointPlaceholders(endpoint: any, params?: any) {
  let renewedEndpoint = endpoint;

  if (params !== undefined && params !== null) {
    Object.entries(params).forEach(element => {
      const placeholder = `:${element[0]}`;

      renewedEndpoint = renewedEndpoint.replace(placeholder, element[1]);
    });
  }

  return renewedEndpoint;
}

function typeGenerator(type: string) {
  return {
    TRIGGER: `${type}_TRIGGER`,
    FULFILL: `${type}_FULFILL`,
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`,
  };
}

export function createActionRoutine(type: string, endpoint = '') {
  const types = typeGenerator(type);

  return {
    ...types,
    trigger: (payload: any = null) => ({ type: types.TRIGGER, payload }),
    fulfill: (payload: any = null) => ({ type: types.FULFILL, payload }),
    success: (payload: any = null) => ({ type: types.SUCCESS, payload }),
    failure: (payload: any = null) => ({ type: types.FAILURE, payload }),
    request: (payload: any = null) => ({ type: types.REQUEST, payload }),
    getEndpoint: (params?: any) => replaceEndpointPlaceholders(endpoint, params),
  };
}

export function createRoutineReducer(): RoutineReducer {
  return {
    items: {},
    isLoading: false,
    errorMessages: undefined,
  };
}

export const getById = (dictionary: any, id: string | number) => {
  return dictionary[id];
};

export const getList = (dictionary: any) => {
  return Object.entries(dictionary).map((item: any) => item[1]);
};

export const getKeys = (dictionary: any) => {
  return Object.keys(dictionary);
};

export const arrayToObject = (array: [], keyField: string) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
