import { UseMockComponent } from './use-mock.component';

class MockAuthService {
  isAuth = true;

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  logIn() {
    this.isAuth = true;
  }

  logOff() {
    this.isAuth = false;
  }
}

describe('UseMockComponent', () => {
  let component: UseMockComponent;

  let mockservice = new MockAuthService();
    
  beforeEach(() => {
    component = new UseMockComponent(mockservice);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return Authenticated true', () => {
    expect(component.loggedIn).toBe(true);
  });
});
