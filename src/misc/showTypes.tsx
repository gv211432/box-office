export namespace SHOW_TYPES {
  export interface Schedule {
    time: string;
    days: string[];
  }

  export interface Rating {
    average: number;
  }

  export interface Country {
    name: string;
    code: string;
    timezone: string;
  }

  export interface WebChannel {
    id: number;
    name: string;
    country: Country;
    officialSite: string;
  }

  export interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  }

  export interface Image {
    medium: string;
    original: string;
  }

  export interface Self {
    href: string;
  }

  export interface Previousepisode {
    href: string;
  }

  export interface Links {
    self: Self;
    previousepisode: Previousepisode;
  }

  export interface Country2 {
    name: string;
    code: string;
    timezone: string;
  }

  export interface Network {
    id: number;
    name: string;
    country: Country2;
    officialSite: string;
  }

  export interface Country3 {
    name: string;
    code: string;
    timezone: string;
  }

  export interface WebChannel2 {
    id: number;
    name: string;
    country: Country3;
    officialSite: string;
  }

  export interface Image2 {
    medium: string;
    original: string;
  }

  export interface Self2 {
    href: string;
  }

  export interface Links2 {
    self: Self2;
  }

  export interface Season {
    id: number;
    url: string;
    number: number;
    name: string;
    episodeOrder?: number;
    premiereDate: string;
    endDate: string;
    network: Network;
    webChannel: WebChannel2;
    image: Image2;
    summary: string;
    _links: Links2;
  }

  export interface Country4 {
    name: string;
    code: string;
    timezone: string;
  }

  export interface Image3 {
    medium: string;
    original: string;
  }

  export interface Self3 {
    href: string;
  }

  export interface Links3 {
    self: Self3;
  }

  export interface Person {
    id: number;
    url: string;
    name: string;
    country: Country4;
    birthday: string;
    deathday?: any;
    gender: string;
    image: Image3;
    updated: number;
    _links: Links3;
  }

  export interface Image4 {
    medium: string;
    original: string;
  }

  export interface Self4 {
    href: string;
  }

  export interface Links4 {
    self: Self4;
  }

  export interface Character {
    id: number;
    url: string;
    name: string;
    image: Image4;
    _links: Links4;
  }

  export interface Cast {
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
  }

  export interface Embedded {
    seasons: Season[];
    cast: Cast[];
  }

  export interface RootObject {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime?: any;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network?: any;
    webChannel: WebChannel;
    dvdCountry?: any;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
    _embedded: Embedded;
  }
}

export interface SHOW_TYPES_ALL {
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  webChannel: {
    id: number;
    name: string;
    country: SHOW_TYPES.Country;
    officialSite: string;
  };
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
  };
  links: {
    self: SHOW_TYPES.Self;
    previousepisode: SHOW_TYPES.Previousepisode;
  };
  country2: {
    name: string;
    code: string;
    timezone: string;
  };
  network: {
    id: number;
    name: string;
    country: SHOW_TYPES.Country2;
    officialSite: string;
  };
  country3: {
    name: string;
    code: string;
    timezone: string;
  };
  webChannel2: {
    id: number;
    name: string;
    country: SHOW_TYPES.Country3;
    officialSite: string;
  };
  image2: {
    medium: string;
    original: string;
  };
  self2: {
    href: string;
  };
  links2: {
    self: SHOW_TYPES.Self2;
  };
  season: {
    id: number;
    url: string;
    number: number;
    name: string;
    episodeOrder?: number;
    premiereDate: string;
    endDate: string;
    network: SHOW_TYPES.Network;
    webChannel: SHOW_TYPES.WebChannel2;
    image: SHOW_TYPES.Image2;
    summary: string;
    _links: SHOW_TYPES.Links2;
  };
  country4: {
    name: string;
    code: string;
    timezone: string;
  };
  image3: {
    medium: string;
    original: string;
  };
  self3: {
    href: string;
  };
  links3: {
    self: SHOW_TYPES.Self3;
  };
  person: {
    id: number;
    url: string;
    name: string;
    country: SHOW_TYPES.Country4;
    birthday: string;
    deathday?: any;
    gender: string;
    image: SHOW_TYPES.Image3;
    updated: number;
    _links: SHOW_TYPES.Links3;
  };
  image4: {
    medium: string;
    original: string;
  };
  self4: {
    href: string;
  };
  links4: {
    self: SHOW_TYPES.Self4;
  };
  character: {
    id: number;
    url: string;
    name: string;
    image: SHOW_TYPES.Image4;
    _links: SHOW_TYPES.Links4;
  };
  cast: {
    person: SHOW_TYPES.Person;
    character: SHOW_TYPES.Character;
    self: boolean;
    voice: boolean;
  };
  embedded: {
    seasons: SHOW_TYPES.Season[];
    cast: SHOW_TYPES.Cast[];
  };
  rootObject: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime?: any;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: SHOW_TYPES.Schedule;
    rating: SHOW_TYPES.Rating;
    weight: number;
    network?: any;
    webChannel: SHOW_TYPES.WebChannel;
    dvdCountry?: any;
    externals: SHOW_TYPES.Externals;
    image: SHOW_TYPES.Image;
    summary: string;
    updated: number;
    _links: SHOW_TYPES.Links;
    _embedded: SHOW_TYPES.Embedded;
  };
}
