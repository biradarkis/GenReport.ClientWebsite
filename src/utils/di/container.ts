// container.ts
import { Container } from 'inversify';
import DefaultStore from '@/state-management/store/app-store'; 
import ApiClient from '../services/api-client';

const container = new Container();
container.bind<DefaultStore>(DefaultStore).toSelf();
container.bind<ApiClient>(ApiClient).toSelf();

export default container;
