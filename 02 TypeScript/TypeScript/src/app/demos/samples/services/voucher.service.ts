import { Voucher } from '../model';

export class VoucherService {
  getVouchers(): Promise<Voucher[]> {
    const url = '/assets/vouchers.json';

    return new Promise<Voucher[]>((resolve, reject) => {
      fetch(url)
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          console.log('error calling service');
          console.log(err);
          return reject(err);
        });
    });
  }
}
