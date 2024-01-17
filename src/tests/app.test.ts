import { app } from '@/app';
import { describe, expect, it } from 'bun:test';

describe('app', () => {
  it('should be defined', async () => {
    expect(app).toBeDefined();
  });
});
