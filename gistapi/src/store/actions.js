// store/actions.js
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export const searchGists = (username) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_GISTS_REQUEST' });

    try {
      const response = await octokit.gists.listForUser({
        username,
        per_page: 100,
      });
      dispatch({ type: 'FETCH_GISTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_GISTS_FAILURE', payload: 'Error fetching gists' });
    }
  };
};
