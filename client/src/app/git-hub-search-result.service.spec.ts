import { TestBed } from '@angular/core/testing';

import { GitHubSearchResultService } from './git-hub-search-result.service';

describe('GitHubSearchResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubSearchResultService = TestBed.get(GitHubSearchResultService);
    expect(service).toBeTruthy();
  });
});
