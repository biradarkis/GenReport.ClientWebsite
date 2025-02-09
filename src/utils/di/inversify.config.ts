// container.ts
import { Container } from 'inversify';
import DefaultStore from '@/state-management/store/app-store'; 
import ApiClient from '../services/api-client';
import 'reflect-metadata';
const container = new Container();
container.bind<DefaultStore>(DefaultStore).toSelf().inSingletonScope();
container.bind<ApiClient>(ApiClient).toSelf().inSingletonScope();

export {container};

