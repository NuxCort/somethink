import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { Login, Register } from '@app/sections/auth/state/auth.actions';
import { AuthStateModel } from '@app/sections/auth/state/auth.state';

@Component({
  selector: 'auth',
  styleUrl: './auth.scss',
  templateUrl: './auth.html',
  standalone: true,
  imports: [FlexBlock, ReactiveFormsModule],
})
export class Auth {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);

  protected readonly form = this.fb.nonNullable.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected readonly isLoading = this.store.selectSignal(
    (state: { auth: AuthStateModel }) => state.auth.isLoading,
  );
  protected readonly error = this.store.selectSignal(
    (state: { auth: AuthStateModel }) => state.auth.error,
  );

  protected submitLogin(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.store.dispatch(new Login(this.form.getRawValue()));
  }

  protected submitRegister(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.store.dispatch(new Register(this.form.getRawValue()));
  }
}
