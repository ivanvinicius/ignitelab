import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface PurchaseCreatedPayload {
  customer: {
    authUserId: string;
  };
  product: {
    id: string;
    title: string;
    slug: string;
  };
}
/**
 * Os controllers no nestjs não são apenas responsáveis por ouvir eventos http/rota
 * como nos padrões Rest/MVC. No caso a seguir, o controller está sendo responsável
 * por ouvir mensagens dos topics do Kafka
 */
@Controller()
export class PurchasesController {
  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload('value') payload: PurchaseCreatedPayload) {
    console.log(payload);
    return this;
  }
}
