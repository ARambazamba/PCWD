import {LoginComponent} from './login.component';
import { AuthService } from "../index";
import { MockAuthService } from "../auth.service.mock";

describe('Component: Login', () => {
  
    let component: LoginComponent;
    let service: MockAuthService;
  
    beforeEach(() => { 
      service = new MockAuthService();
      component = new LoginComponent(service);
    });
  
    afterEach(() => {
      service = null;
      component = null;
    });
  
  
    it('needsLogin return true when the user is not authenticated', () => {
      service.authenticated = false; 
      expect(component.needsLogin()).toBeTruthy();
    });
  
    it('needsLogin returns false when the user is authenticated', () => {
      service.authenticated = true; 
      expect(component.needsLogin()).toBeFalsy();
    });
  });


describe('Component: Login - Spy', () => {

  let component: LoginComponent;
  let service: AuthService;
  let spy: any;

  beforeEach(() => { 
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => { 
    service = null;
    component = null;
  });


  it('needsLogin return true when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false); 
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled(); 

  });

  it('needsLogin returns false when the user is authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});