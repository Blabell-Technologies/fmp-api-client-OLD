class RetryLimit extends Error {
  constructor(name) {
    super();
    this.name = 'RetryLimit';
    this.message = name;
  }
}

// { code: 400, type: 'invalid-request-error } - Pets.Add
class UndefinedRequiredData extends Error {
  constructor(name) {
    super();
    this.name = 'UndefinedRequiredData';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'owner_email' } - Pets.Add
class InvalidEmail extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidEmail';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'owner_phone' } - Pets.Add
// { code: 406, type: 'validation-error', field: 'owner_phone' } - Pets.Modify
class InvalidPhone extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidPhone';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'disappearance_place' } - Pets.Add
// { code: 406, type: 'validation-error', field: 'owner_home' } - Pets.Add
// { code: 406, type: 'validation-error', field: 'owner_home' } - Pets.Modify
// { code: 406, type: 'validation-error', field: 'disappearance_place' } - Pets.Modify
class InvalidCoordinates extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidCoordinates';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'disappearance_date' } - Pets.Add
class InvalidDate extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidDate';
    this.message = name;
  }
}

class InvalidFile extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidFile';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'pet_animal' } - Pets.Add
// { code: 404, type: 'api-error', details: 'animal-not-found' } - Animals.Get
class InvalidAnimal extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidAnimal';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'pet_race' } - Pets.Add
// { code: 406, type: 'validation-error', field: 'pet_race' } - Pets.Modify
class InvalidRace extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidRace';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'reward' } - Pets.Add
class InvalidReward extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidReward';
    this.message = name;
  }
}

// { code: 500, type: 'database-error' } - Pets.Add
// { code: 500, type: 'database-error' } - Pets.Nearby
// { code: 500, type: 'database-error' } - Pets.Single
// { code: 500, type: 'database-error' } - Pets.Search
// { code: 500, type: 'database-error' } - Pets.Modify
class DatabaseError extends Error {
  constructor(name) {
    super();
    this.name = 'DatabaseError';
    this.message = name;
  }
}

// { code: 400, type: `validation-error`, field: path  } - Pets.Add
// { code: 400, type: `validation-error`, field: path  } - Pets.Modify
class DatabaseValidationError extends Error {
  constructor(name) {
    super();
    this.name = 'DatabaseValidationError';
    this.message = name;
  }
}

// { code: 404, type: 'api-error' } - AnyPageNotFounded
// { code: 404, type: 'api-error' } - Pets.Single
// { code: 404, type: 'api-error' } - Pets.Modify
class ResourceNotFound extends Error {
  constructor(name) {
    super();
    this.name = 'ResourceNotFound';
    this.message = name;
  }
}

// { code: 406, type: 'validation-error', field: 'found' } - Pets.Modify
class InvalidFoundState extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidFoundState';
    this.message = name;
  }
}

// { code: 500, type: 'image-error', field: photo_index } - Pets.Add
// { code: 500, type: 'api-error', details: 'fetch-error' } - Pets.Add
// { code: 500, type: 'api-error' } - Pets.Nearby
// { code: 500, type: 'api-error' } - Pets.Search
class UnexpectedApiError extends Error {
  constructor(name) {
    super();
    this.name = 'UnexpectedApiError';
    this.message = name;
  }
}

class InvalidToken extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidToken';
    this.message = name;
  }
}


// ahi modifique el sender para que haga bien todo
module.exports = {
  RetryLimit,
  UndefinedRequiredData,
  InvalidEmail,
  InvalidPhone,
  InvalidCoordinates,
  InvalidDate,
  InvalidFile,
  InvalidAnimal,
  InvalidRace,
  InvalidReward,
  DatabaseError,
  DatabaseValidationError,
  ResourceNotFound,
  InvalidFoundState,
  UnexpectedApiError,
  InvalidToken
};
