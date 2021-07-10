class RetryLimit extends Error {
  constructor(name) {
    super();
    this.name = 'RetryLimit';
    this.message = name;
  }
}

class UndefinedRequiredData extends Error {
  constructor(name) {
    super();
    this.name = 'UndefinedRequiredData';
    this.message = name;
  }
}

class InvalidEmail extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidEmail';
    this.message = name;
  }
}

class InvalidPhone extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidPhone';
    this.message = name;
  }
}

class InvalidCoordinates extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidCoordinates';
    this.message = name;
  }
}

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

class InvalidAnimal extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidAnimal';
    this.message = name;
  }
}

class InvalidRace extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidRace';
    this.message = name;
  }
}

class InvalidReward extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidReward';
    this.message = name;
  }
}

class DatabaseError extends Error {
  constructor(name) {
    super();
    this.name = 'DatabaseError';
    this.message = name;
  }
}

class DatabaseValidationError extends Error {
  constructor(name) {
    super();
    this.name = 'DatabaseValidationError';
    this.message = name;
  }
}

class ResourceNotFound extends Error {
  constructor(name) {
    super();
    this.name = 'ResourceNotFound';
    this.message = name;
  }
}

class InvalidFoundState extends Error {
  constructor(name) {
    super();
    this.name = 'InvalidFoundState';
    this.message = name;
  }
}

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

class UnknownError extends Error {
  constructor(name) {
    super();
    this.name = 'UnknownError'
    this.message = name;
  }
}


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
  InvalidToken,
  UnknownError
};
