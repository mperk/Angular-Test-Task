import { Injectable } from '@angular/core';
import { ApiService } from 'src/modules/core/services/api.service';

@Injectable()
export class PaginationResolver {

  constructor(private apiService: ApiService) {}

  resolve() {
    return this.apiService.fetchPaginationInfo();
  }

}
