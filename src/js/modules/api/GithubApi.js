import {
  GITHUB_API_COMMITS_PATH,
  GITHUB_API_URL,
  GITHUB_REPOSITORY_NAME,
  GITHUB_USER_NAME
} from "../../constants/constants";

import Gate from "./Gate";

export default class GithubApi extends Gate{

  getCommits = () => {

    return this._get(
      `${GITHUB_API_URL}/${GITHUB_USER_NAME}/${GITHUB_REPOSITORY_NAME}/${GITHUB_API_COMMITS_PATH}`,
      {},
      {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );

  }

}