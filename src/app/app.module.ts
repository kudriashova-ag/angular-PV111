import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shop/product.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductService],
})
    
    
export class MyComponentModule {}