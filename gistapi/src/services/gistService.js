import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export const getPublicGistsByUsername = async (username) => {
  const response = await octokit.gists.listForUser({
    username,
    per_page: 100, // You can adjust the number of gists per page as needed
  });
  return response;
};