if (Clients.find().count() === 0) {
  Clients.insert({
    firstName: 'Mike',
    lastName: 'Lou',
    address: 'Bathurst',
    phone: '+358443096868',
    email: 'me@phuong.vu'
  });
  Clients.insert({
    firstName: 'Ted',
    lastName: 'Kim',
    address: '123 Bathurst',
    phone: '+358443096868',
    email: 'me@phuong.vu'
  });
  Clients.insert({
    firstName: 'Mei',
    lastName: 'Ng.',
    address: '123 Bathurst',
    phone: '+358443096868',
    email: 'me@phuong.vu'
  });
}

if (Applications.find().count() === 0) {
  Applications.insert({
    clientId: Clients.findOne({firstName: 'Mike'})._id,
    type: 'education',
    amount: 200,
    date: new Date()
  });
  Applications.insert({
    clientId: Clients.find({firstName: 'Ted'})._id,
    type: 'house',
    amount: 1200,
    date: new Date()
  });
  Applications.insert({
    clientId: '1233',
    type: 'house',
    amount: 1200,
    date: new Date()
  });
}
