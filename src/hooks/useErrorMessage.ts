import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

/**
 * The function `useErrorMessage` determines and returns an error message based on the type of error
 * provided.
 * @param {FetchBaseQueryError | SerializedError | undefined} error - The `error` parameter in the
 * `useErrorMessage` function can be of type `FetchBaseQueryError`, `SerializedError`, or `undefined`.
 * The function checks the type of the error object and extracts the error message accordingly. If the
 * error is a `FetchBaseQueryError`, it retrieves the
 * @returns The function `useErrorMessage` returns an object with a property `errMsg` which contains
 * the error message.
 */
const useErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
  let errMsg: string = '';
  if (error) {
    // 2) Checking if error is FetchBaseQueryError based on
    // discriminated property 'status':
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
      // 3) We're left with the 3rd case, SerializedError:
    } else {
      // you can access all properties of `SerializedError` here
      errMsg = 'An error occurred';
    }
  }

  return { errMsg };
};

export default useErrorMessage;
