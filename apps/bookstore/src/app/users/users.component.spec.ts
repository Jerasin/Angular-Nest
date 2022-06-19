import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth/index';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
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

  beforeEach(inject([AngularFireAuth], (afAuth: AngularFireAuth) => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
