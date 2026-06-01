import { HealthService } from '../health.service';

describe('HealthService', () => {
  it('reports database status from datasource', async () => {
    const service = new HealthService(
      { isInitialized: true } as never,
      { healthCheck: jest.fn().mockResolvedValue({ status: 'ok' }) } as never,
    );
    await expect(service.getSystemHealth()).resolves.toMatchObject({
      api: 'ok',
      database: 'ok',
    });
  });
});
