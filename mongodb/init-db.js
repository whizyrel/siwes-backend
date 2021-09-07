var db = db.getSiblingDB('siwes_db');
db.createUser({
    'user': 'siwes_user',
    'pwd': 'siwes_user',
    'roles': [
      {
        'role': 'readWrite',
        'db': 'siwes_db'
      }
    ]
});
