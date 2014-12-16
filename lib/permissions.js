ownsDocument = function(userId, doc) {
  return doc && doc.agentId === userId;
};
