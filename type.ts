declare module namespace {
  export interface Cost {
    Wood: number;
    Gold: number;
    Food?: number;
  }

  export interface Unit {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    cost: Cost;
    build_time: number;
    reload_time: number;
    attack_delay: number;
    movement_rate: number;
    line_of_sight: number;
    hit_points: number;
    range: any;
    attack: number;
    armor: string;
    accuracy: string;
    attack_bonus: string[];
    search_radius?: number;
    blast_radius?: number;
    armor_bonus: string[];
  }

  export interface RootObject {
    units: Unit[];
  }
}
