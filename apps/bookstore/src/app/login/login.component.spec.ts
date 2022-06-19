import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../auth/index';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  const authState = {
    displayName: null,
    isAnonymous: true,
    uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2',
  };

  const authStub: any = {
    authState: of(authState),
    auth: {
      signInWithEmailAndPassword() {
        return Promise.resolve();
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: AngularFirestore, useValue: [] },
        { provide: AngularFireAuth, useValue: authStub },
        RouterTestingModule,
        AuthService,
      ],
    }).compileComponents();
  });

  beforeEach(inject(
    [FormBuilder, AngularFireAuth],
    (fb: FormBuilder, afAuth: AngularFireAuth) => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      component.loginForm = fb.group({ email: [''], password: [''] });
      fixture.detectChanges();
      authService = TestBed.inject(AuthService);
      router = TestBed.inject(Router);
    }
  ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
