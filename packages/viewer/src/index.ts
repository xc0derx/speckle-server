import { Viewer } from './modules/Viewer'
import {
  CanonicalView,
  DefaultLightConfiguration,
  DefaultViewerParams,
  InlineView,
  IViewer,
  SelectionEvent,
  SpeckleView,
  ViewerEvent
} from './IViewer'
import { FilteringState } from './modules/filtering/FilteringManager'
import {
  PropertyInfo,
  StringPropertyInfo,
  NumericPropertyInfo
} from './modules/filtering/PropertyManager'

import { SunLightConfiguration } from './IViewer'
import { DataTree, ObjectPredicate, SpeckleObject } from './modules/tree/DataTree'
import { World } from './modules/World'
import { DebugViewer } from './modules/DebugViewer'
import {
  PointQuery,
  QueryResult,
  IntersectionQuery,
  PointQueryResult,
  IntersectionQueryResult
} from './modules/queries/Query'
import { Utils } from './modules/Utils'
import { ObjectLayers } from './modules/SpeckleRenderer'
import { DiffResult } from './modules/Differ'
import { BatchObject } from './modules/batching/BatchObject'
import { Box3, Vector3 } from 'three'
import { WorldTree } from './modules/tree/WorldTree'

export {
  Viewer,
  DebugViewer,
  DefaultViewerParams,
  ViewerEvent,
  DefaultLightConfiguration,
  World,
  BatchObject,
  Box3,
  Vector3,
  WorldTree
}

export type {
  IViewer,
  SelectionEvent,
  PropertyInfo,
  StringPropertyInfo,
  NumericPropertyInfo,
  FilteringState,
  SunLightConfiguration,
  DataTree,
  ObjectPredicate,
  SpeckleObject,
  SpeckleView,
  CanonicalView,
  InlineView,
  ObjectLayers,
  PointQuery,
  IntersectionQuery,
  QueryResult,
  PointQueryResult,
  IntersectionQueryResult,
  Utils,
  DiffResult
}
