import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../auth/index';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let angularFirestore: AngularFirestore;
  let angularFireAuth: AngularFireAuth;
  let authService: AuthService;
  let router: Router;

  const authStub: any = {
    authState: {},
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

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = fb.group({ email: [''], password: [''] });
    angularFirestore = TestBed.inject(AngularFirestore);
    angularFireAuth = TestBed.inject(AngularFireAuth);
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
