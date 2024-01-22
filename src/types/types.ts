export interface User {
  email: string;
  nat: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  phone: string;
  cell: string;

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };

  gender: string;
  dob: {
    date: string;
    age: number;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    postcode: string;
    city: string;
    state: string;
    country: string;
    street: {
      number: number;
      name: string;
    };
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  // ... other fields
}

interface ListingProps {
  // Props for Listing component
}

interface UserCardProps {
  user: User;
  // Other props
}

interface ProfileProps {
  user: User;
  // Other props
}
