import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

import { DatabaseModule } from '../database/database.module';

import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchaseResolver } from './graphql/resolvers/purchase.resolver';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';

import { ProductsService } from '../services/products.service';
import { PurchasesService } from '../services/purchases.service';
import { CustomersService } from '../services/customers.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    //resolvers
    ProductsResolver,
    PurchaseResolver,
    CustomersResolver,

    //services
    ProductsService,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}
