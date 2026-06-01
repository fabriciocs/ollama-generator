import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DebugLogsPage } from '../../features/debug/pages/DebugLogsPage';
import { GeneratedFilesPage } from '../../features/generated-files/pages/GeneratedFilesPage';
import { GenerationCreatePage } from '../../features/generations/pages/GenerationCreatePage';
import { GenerationDetailPage } from '../../features/generations/pages/GenerationDetailPage';
import { GenerationProgressPage } from '../../features/generations/pages/GenerationProgressPage';
import { HealthPage } from '../../features/health/pages/HealthPage';
import { LandingPage } from '../../features/landing/pages/LandingPage';
import { PromptCatalogPage } from '../../features/prompts/pages/PromptCatalogPage';
import { SettingsPage } from '../../features/settings/pages/SettingsPage';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/generations', element: <GenerationCreatePage /> },
  { path: '/generations/:id', element: <GenerationDetailPage /> },
  { path: '/progress', element: <GenerationProgressPage /> },
  { path: '/files', element: <GeneratedFilesPage /> },
  { path: '/prompts', element: <PromptCatalogPage /> },
  { path: '/health', element: <HealthPage /> },
  { path: '/debug', element: <DebugLogsPage /> },
  { path: '/settings', element: <SettingsPage /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
