import { inject, Service } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Service()
export class HeaderSearchFormFactoryService {
    private readonly fb = inject(FormBuilder);

    public readonly headerSearchControl = this.fb.control('', [Validators.minLength(1)]);
}
