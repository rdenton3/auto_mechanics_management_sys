const { Customer } = require("../models");

const customerdata = [
  {
    car_make_model: "Nunc rhoncus dui vel sem.",
    mileage: 10000,
    user_id: 6,
    status_id: 1,
  },
  {
    car_make_model:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    mileage: 10000,
    user_id: 6,
    status_id: 8,
  },
  {
    car_make_model: "Aliquam erat volutpat. In congue.",
    mileage: 10000,
    user_id: 3,
    status_id: 10,
  },
  {
    car_make_model:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    mileage: 10000,
    user_id: 3,
    status_id: 18,
  },
  {
    car_make_model: "In hac habitasse platea dictumst.",
    mileage: 10000,
    user_id: 7,
    status_id: 5,
  },
  {
    car_make_model: "Vivamus vestibulum sagittis sapien.",
    mileage: 10000,
    user_id: 1,
    status_id: 20,
  },
  {
    car_make_model:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    mileage: 10000,
    user_id: 6,
    status_id: 7,
  },
  {
    car_make_model: "Sed vel enim sit amet nunc viverra dapibus.",
    mileage: 10000,
    user_id: 7,
    status_id: 4,
  },
  {
    car_make_model:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    mileage: 10000,
    user_id: 6,
    status_id: 12,
  },
  {
    car_make_model: "Morbi a ipsum.",
    mileage: 10000,
    user_id: 6,
    status_id: 20,
  },
  {
    car_make_model:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    mileage: 10000,
    user_id: 3,
    status_id: 14,
  },
  {
    car_make_model: "Donec ut mauris eget massa tempor convallis.",
    mileage: 10000,
    user_id: 5,
    status_id: 4,
  },
  {
    car_make_model:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    mileage: 10000,
    user_id: 4,
    status_id: 9,
  },
  {
    car_make_model:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    mileage: 10000,
    user_id: 5,
    status_id: 14,
  },
  {
    car_make_model: "Quisque porta volutpat erat.",
    user_id: 6,
    status_id: 2,
  },
  {
    car_make_model:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    mileage: 10000,
    user_id: 8,
    status_id: 2,
  },
  {
    car_make_model:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    mileage: 10000,
    user_id: 2,
    status_id: 20,
  },
  {
    car_make_model:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    mileage: 10000,
    user_id: 4,
    status_id: 11,
  },
  {
    car_make_model:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    mileage: 10000,
    user_id: 5,
    status_id: 13,
  },
  {
    car_make_model:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    mileage: 10000,
    user_id: 9,
    status_id: 16,
  },
  {
    car_make_model: "Curabitur convallis.",
    mileage: 10000,
    user_id: 6,
    status_id: 4,
  },
  {
    car_make_model:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    mileage: 10000,
    user_id: 4,
    status_id: 10,
  },
  {
    car_make_model: "Morbi non quam nec dui luctus rutrum.",
    mileage: 10000,
    user_id: 3,
    status_id: 8,
  },
  {
    car_make_model:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    mileage: 10000,
    user_id: 8,
    status_id: 10,
  },
  {
    car_make_model:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    mileage: 10000,
    user_id: 1,
    status_id: 15,
  },
  {
    car_make_model:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    mileage: 10000,
    user_id: 5,
    status_id: 3,
  },
  {
    car_make_model: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    mileage: 10000,
    user_id: 1,
    status_id: 15,
  },
  {
    car_make_model: "Nam tristique tortor eu pede.",
    mileage: 10000,
    user_id: 4,
    status_id: 16,
  },
  {
    car_make_model:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    mileage: 10000,
    user_id: 4,
    status_id: 18,
  },
  {
    car_make_model: "Proin eu mi. Nulla ac enim.",
    mileage: 10000,
    user_id: 4,
    status_id: 10,
  },
  {
    car_make_model: "Sed ante. Vivamus tortor.",
    mileage: 10000,
    user_id: 7,
    status_id: 5,
  },
  {
    car_make_model: "Aliquam quis turpis eget elit sodales scelerisque.",
    mileage: 10000,
    user_id: 10,
    status_id: 1,
  },
  {
    car_make_model: "Donec quis orci eget orci vehicula condimentum.",
    mileage: 10000,
    user_id: 3,
    status_id: 19,
  },
  {
    car_make_model:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    mileage: 10000,
    user_id: 5,
    status_id: 3,
  },
  {
    car_make_model:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    mileage: 10000,
    user_id: 10,
    status_id: 14,
  },
  {
    car_make_model: "Maecenas ut massa quis augue luctus tincidunt.",
    mileage: 10000,
    user_id: 10,
    status_id: 8,
  },
  {
    car_make_model: "Cras in purus eu magna vulputate luctus.",
    mileage: 10000,
    user_id: 10,
    status_id: 11,
  },
  {
    car_make_model: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
    mileage: 10000,
    user_id: 8,
    status_id: 5,
  },
  {
    car_make_model: "Proin at turpis a pede posuere nonummy.",
    mileage: 10000,
    user_id: 8,
    status_id: 19,
  },
  {
    car_make_model:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    mileage: 10000,
    user_id: 9,
    status_id: 19,
  },
  {
    car_make_model:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    mileage: 10000,
    user_id: 5,
    status_id: 4,
  },
  {
    car_make_model:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    mileage: 10000,
    user_id: 2,
    status_id: 11,
  },
  {
    car_make_model: "Vestibulum ac est lacinia nisi venenatis tristique.",
    mileage: 10000,
    user_id: 4,
    status_id: 6,
  },
  {
    car_make_model:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    mileage: 10000,
    user_id: 9,
    status_id: 6,
  },
  {
    car_make_model:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    mileage: 10000,
    user_id: 7,
    status_id: 9,
  },
  {
    car_make_model: "Integer ac leo. Pellentesque ultrices mattis odio.",
    mileage: 10000,
    user_id: 4,
    status_id: 19,
  },
  {
    car_make_model:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    mileage: 10000,
    user_id: 10,
    status_id: 1,
  },
  {
    car_make_model:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    mileage: 10000,
    user_id: 2,
    status_id: 19,
  },
  {
    car_make_model: "Proin risus. Praesent lectus.",
    mileage: 10000,
    user_id: 10,
    status_id: 1,
  },
  {
    car_make_model:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
    mileage: 10000,
    user_id: 10,
    status_id: 12,
  },
];

const seedCustomer = () => Customer.bulkCreate(customerdata);

module.exports = seedCustomer;
