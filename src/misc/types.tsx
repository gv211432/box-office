export namespace TV_DATA {
  export interface Schedule {
    time: string;
    days: string[];
  }

  export interface Rating {
    average?: number;
  }

  export interface Country {
    name: string;
    code: string;
    timezone: string;
  }

  export interface Network {
    id: number;
    name: string;
    country: Country;
    officialSite: string;
  }

  export interface WebChannel {
    id: number;
    name: string;
    country?: any;
    officialSite: string;
  }

  export interface Externals {
    tvrage?: any;
    thetvdb?: number;
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

  export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime?: number;
    averageRuntime?: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel: WebChannel;
    dvdCountry?: any;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
  }

  export interface RootObject {
    score: number;
    show: Show;
  }
}

export interface TV_DATA_ALL {
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average?: number;
  };
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  network: {
    id: number;
    name: string;
    country: TV_DATA.Country;
    officialSite: string;
  };
  webChannel: {
    id: number;
    name: string;
    country?: any;
    officialSite: string;
  };
  externals: {
    tvrage?: any;
    thetvdb?: number;
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
    self: TV_DATA.Self;
    previousepisode: TV_DATA.Previousepisode;
  };
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime?: number;
    averageRuntime?: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: TV_DATA.Schedule;
    rating: TV_DATA.Rating;
    weight: number;
    network: TV_DATA.Network;
    webChannel: TV_DATA.WebChannel;
    dvdCountry?: any;
    externals: TV_DATA.Externals;
    image: TV_DATA.Image;
    summary: string;
    updated: number;
    _links: TV_DATA.Links;
  };
  rootObject: {
    score: number;
    show: TV_DATA.Show;
  };
}

export namespace TV_ACTOR {
  export interface Country {
    name: string;
    code: string;
    timezone: string;
  }

  export interface Image {
    medium: string;
    original: string;
  }

  export interface Self {
    href: string;
  }

  export interface Links {
    self: Self;
  }

  export interface Person {
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday: string;
    deathday?: any;
    gender: string;
    image: Image;
    updated: number;
    _links: Links;
  }

  export interface RootObject {
    score: number;
    person: Person;
  }
}

export interface TV_ACTOR_ALL {
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  image: {
    medium: string;
    original: string;
  };
  self: {
    href: string;
  };
  links: {
    self: TV_ACTOR.Self;
  };
  person: {
    id: number;
    url: string;
    name: string;
    country: TV_ACTOR.Country;
    birthday: string;
    deathday?: any;
    gender: string;
    image: TV_ACTOR.Image;
    updated: number;
    _links: TV_ACTOR.Links;
  };
  rootObject: {
    score: number;
    person: TV_ACTOR.Person;
  };
}
