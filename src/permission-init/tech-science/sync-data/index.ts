import {props as dbsProps} from './dbs'
import {props as itmProps} from './instance-task-mapping'
import {props as stProps} from './streamx-tasks'
import {props as syncProps} from './sync-tasks'
import {props as syncTaskCheckedProps} from './sync-tasks-checked'

export const syncData = {
  dbs: dbsProps,
  instance_task_mapping: itmProps,
  streamx_tasks: stProps,
  sync_tasks: syncProps,
  sync_tasks_checked: syncTaskCheckedProps
}
