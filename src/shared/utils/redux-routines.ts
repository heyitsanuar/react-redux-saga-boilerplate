import { RoutineReducer } from './redux-routines.d';

function replaceEndpointPlaceholders(endpoint: string, params: any) {
  let renewedEndpoint = endpoint;

  if (params !== undefined && params !== null) {
    Object.entries(params).forEach((element: any) => {
      const placeholder = `:${element[0]}`;

      renewedEndpoint = renewedEndpoint.replace(placeholder, element[1]);
    });
  }

  return renewedEndpoint;
}

function typeGenerator(type: string) {
  return {
    TRIGGER: `${type}/TRIGGER`,
    FULFILL: `${type}/FULFILL`,
    REQUEST: `${type}/REQUEST`,
    SUCCESS: `${type}/SUCCESS`,
    FAILURE: `${type}/FAILURE`,
  };
}

function createActionRoutine(type: string, endpoint = '') {
  const types = typeGenerator(type);

  return {
    ...types,
    trigger: (payload = null) => ({ type: types.TRIGGER, payload }),
    fulfill: (payload = null) => ({ type: types.FULFILL, payload }),
    success: (payload = null) => ({ type: types.SUCCESS, payload }),
    failure: (payload = null) => ({ type: types.FAILURE, payload }),
    request: (payload = null) => ({ type: types.REQUEST, payload }),
    getEndpoint: (params: any) => replaceEndpointPlaceholders(endpoint, params),
  };
}

function createCrudReducer(params?: any): RoutineReducer {
  return {
    items: {},
    isLoading: false,
    errorMessages: {},
    ...params,
  };
}

function createReducerRoutine(params: any) {
  var modelBuffer = {};

  params.forEach((item: any) => {
    if (typeof item === 'string') {
      modelBuffer = { ...modelBuffer, [item]: { ...createCrudReducer() } };
    } else if (typeof item === 'object') {
      modelBuffer = {
        ...modelBuffer,
        [item.key]: { ...createCrudReducer(item.model) },
      };
    }
  });

  return { ...modelBuffer };
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
