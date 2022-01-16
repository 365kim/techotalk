import data1 from '../data/data1-1.json' assert { type: 'json' };
import data2 from '../data/data1-2.json' assert { type: 'json' };
import data3 from '../data/data1-3.json' assert { type: 'json' };
import data4 from '../data/data1-4.json' assert { type: 'json' };
import data5 from '../data/data1-5.json' assert { type: 'json' };
import data6 from '../data/data1-6.json' assert { type: 'json' };

export const totalData = [
  ...data1.items,
  ...data2.items,
  ...data3.items,
  ...data4.items,
  ...data5.items,
  ...data6.items,
];
