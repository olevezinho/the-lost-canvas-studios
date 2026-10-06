import { describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NotFound } from './not-found';
import { provideRouter } from '@angular/router';
import { Meta } from '@angular/platform-browser';

describe('NotFound', () => {
  it('define robots noindex', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(NotFound);
    fixture.detectChanges();
    expect(TestBed.inject(Meta).getTag('name="robots"')?.content).toBe('noindex');
  });
});
