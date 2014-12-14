if (Applications.find().count() === 0) {
  Applications.insert({
    clientId: '1231',
    type: 'education',
    amount: 200,
    date: new Date()
  });
  Applications.insert({
    clientId: '1234',
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
