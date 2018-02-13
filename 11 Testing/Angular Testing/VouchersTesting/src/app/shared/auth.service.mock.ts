import { AuthService } from './auth.service';

export class MockAuthService extends AuthService {
    authenticated = false;
  
    isAuthenticated() {
      return this.authenticated;
    }
  }