let name = 'ศักรินทร์';

let rabbit = {
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2,
    talk() {
        console.log(this.name + ', Oung oung');
    },
    weightDetail() {
        if (this.weight < 1) {
            return 'น้อยเกิ๊นนนนนนน';
        }
        else if (this.weight > 2) {
            return 'มากเกิ๊นนนนน';
        }
        return 'ปกติจ้าาาา';
    }
};

console.log(rabbit.weightDetail());