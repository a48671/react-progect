export type TBuildMode = 'development' | 'production';

export interface IBuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
}

export type IBuildEnv = {
  port: number,
  mode: TBuildMode;
}
