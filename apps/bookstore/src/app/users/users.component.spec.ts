import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth/index';
import { Router } from '@angular/router';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
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
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
      declarations: [UsersComponent],
      providers: [
        { provide: AngularFirestore, useValue: [] },
        { provide: AngularFireAuth, useValue: authStub },
        RouterTestingModule,
        AuthService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    angularFirestore = TestBed.inject(AngularFirestore);
    angularFireAuth = TestBed.inject(AngularFireAuth);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
