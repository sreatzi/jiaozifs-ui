import { RepositoryDeletionError } from "../../../lib/api";
import { Branch, RepositoryParams } from "../../../lib/api/interface";

export type StorageConfigContextType = {
    warnings?: any[] | undefined;
    error: Error | null;
    loading: boolean;
    blockstore_namespace_ValidityRegex: string | null;
    blockstore_namespace_example: string | null;
    blockstore_type: string | null;
    default_namespace_prefix: string | null;
    import_support: boolean;
    import_validity_regex: string | null;
    pre_sign_support: boolean;
    pre_sign_support_ui: boolean;
  };
  export type Pair = {
    key: string,
    value: string;
  }
  export type UploadResult = {
    status: number;
    body: string;
    contentType: string | null;
    etag: string | null;
    contentMD5: string | null;
  }
  export interface ImportModalProps {
    config:StorageConfigContextType;
    path:string | undefined;
    repoId:string;
    referenceId:string;
    referenceType:any;
    onDone:() => void;
    onHide:() => void;
    show:boolean;
  }
  export type InitialState = {
    inProgress: boolean,
    error : null | Error,
    done: boolean,
  }
  export interface ObjectsBrowserProps{
    config: StorageConfigContextType;
    configError:  Error | null;
  }
  export interface _File extends File {
    id:string;
    size: number;
    path: string;
    type: string;
  }
  export interface RepositoryInDeletionContainerProps {
    repoId: string;
  }
  export type Reference = {
    id: string;
    type: string;
  }
 
  export type State = {
    status: string; 
    percent: number;
  }
  export type OpFn = (progress: any) => void 
  export interface UploadFileProps {
    (config: StorageConfigContextType, repo: RepositoryParams , reference: Reference , path:string | undefined, file: _File, onProgress: ((progress: any) => void) | null | undefined): Promise<void>;
  }
  export interface UploadCandidateProps {
    repo: RepositoryParams;
    reference: Reference;
    path: string | undefined;
    file: _File;
    state: { status: string; percent: number } | null;
    onRemove?: (() => void) | null;
  }
  export interface UploadButtonProps {
    config: StorageConfigContextType;
    repo: RepositoryParams;
    reference: Reference;
    path: string | undefined;
    onDone: () => void;
    onClick: () => void;
    onHide: () => void;
    show: boolean;
  }
  
  export interface ImportButtonProps {
    variant?: string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
    config: StorageConfigContextType
  }
  export interface TreeContainerProps {
    config: StorageConfigContextType;
    repo: RepositoryParams;
    reference: Reference;
    path: string;
    after: string;
    onPaginate: (after:string) => void;
    onRefresh: () => void;
    onUpload: () => void;
    onImport: () => void;
    refreshToken:boolean;
    show?: boolean;
  }
  export interface ReadmeContainerProps {
    config:StorageConfigContextType;
    repo:RepositoryParams;
    reference:Reference;
    path?:string;
    refreshDep?:string | boolean;
  }
  export interface NoGCRulesWarningProps{
    repoId: string; 
  }
  export interface CompareListProps {
      repo: RepositoryParams; // 
      reference: Reference; // 
      compareReference: Reference; // 
      prefix: string;
      onSelectRef: (ref: any) => void; // 
      onSelectCompare: (compare: any) => void; // 
      onNavigate: (path: string) => void;
  }
  export interface IRefObject {
    id: string;
    type: string; 
  }
  export interface MergeButtonProps {
    repo: RepositoryParams;
    onDone: () => void;
    source: string | number | boolean;
    dest: string | number | boolean;
    disabled?: boolean;
    isTableMerge: boolean;
}
export type BranchWidgetParms = {
   repo: RepositoryParams;
   branch: Branch;
   onDelete: (id:string) => void
}
export interface CreateBranchButtonProps {
  repo: RepositoryParams;
  variant?: string;
  onCreate?: () => void;
  children?: React.ReactNode;
}
export interface BranchListProps {
  repo: RepositoryParams;
  prefix: string;
  after: string;
  onPaginate: (after:any) => void | (() => void);
}
export interface UseRefsReturn {
  repo: RepositoryParams; 
  loading: boolean;
  error: Error | null;
}
export interface MetadataField {
  key: string;
  value: string;
}
export interface CommitButtonProps {
  repo: RepositoryParams;
  onCommit: (commit: { message: string; metadata: Record<string, string>; }, callback: () => void) => void;
  enabled?: boolean;
}
export interface RevertButtonProps {
  onRevert: () => void;
  enabled?: boolean;
}
export interface ResultsState {
  prefix: string;
  results: { path: string }[]; 
  pagination: any; 
}
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type GetMore = () => Promise<{ results: { path: string }[]; pagination: any; }>;
export interface ChangesBrowserProps {
  repo: RepositoryParams;
  reference: Reference;
  prefix: string;
  onSelectRef:(ref: any) => void |( () => void);
}
export type GetMoreUncommittedChanges = (
  afterUpdated: string,
  path: string,
  useDelimiter?: boolean,
  amount?: number
) => Promise<any>;
export interface ChangesTreeContainerProps {
  results: { path: string }[];
  delimiter: string;
  uriNavigator: React.JSX.Element;
  leftDiffRefID: string;
  rightDiffRefID: string;
  repo: RepositoryParams;
  reference: Reference;
  internalRefresh: boolean;
  prefix: string;
  getMore: GetMoreUncommittedChanges;
  loading: boolean;
  nextPage: any | null;
  setAfterUpdated: React.Dispatch<React.SetStateAction<string>> | ((afterUpdated: string) => void);
  onNavigate: (entry: any) => void; // 你需要根据实际情况定义 entry 的类型
  onRevert: (entry: {    path_type: string;    path: string;}) => Promise<void> | (() => void);
  setIsTableMerge: (isTableMerge: boolean) => void;
  changesTreeMessage?: string | React.JSX.Element;
}
export interface StatEvent {
  class: string;
  name: string;
  count: number;
}
export interface Tag {
  id: string;
  commit_id: string;
}
export interface TagWidgetProps {
  repo: RepositoryParams;
  tag: Tag;
  onDelete: (id: string) => void;
}
export interface CreateTagButtonProps {
  repo: RepositoryParams;
  variant?: string;
  onCreate?: (response: any) => void;
  children?: React.ReactNode;
}
export interface TagListProps {
  repo: RepositoryParams;
  after: string; 
  prefix: string; 
  onPaginate: (page: any) => void; 
}
export interface RepoErrorProps {
  error: RepositoryDeletionError | null;
}

export interface Run {
  run_id: string;
  event_type: string;
  status: 'completed' | 'failed' | 'running' | 'skipped';
  branch: string;
  commit_id: string;
  start_time: string | number;
  end_time: string | number;
}
export interface RunSummaryProps {
  repo: RepositoryParams;
  run: Run;
}
interface Execution {
  hook_run_id: string;
  hook_id: string;
  status: 'completed' | 'failed' | 'running' | 'skipped';
  start_time: string | number;
  end_time: string | number;
}
export interface HookLogProps {
  repo: RepositoryParams;
  run: Run;
  execution: Execution;
}
export interface ExecutionsExplorerProps {
  repo: RepositoryParams; 
  run: Run; 
  executions: Execution[]; 
}
export interface ActionBrowserProps {
  repo: RepositoryParams; 
  run: Run; 
  hooks: HooksType; 
  onSelectAction: (action: ActionType | null | string) => void; 
  selectedAction: ActionType | null | string; 
}
interface HooksType {
  results: HookRunType[];
}
interface HookRunType {
  action: ActionType;
  hook_run_id: string;
  hook_id:string; 
  status: 'completed' | 'failed' | 'running' | 'skipped';
  start_time: string | number;
  end_time: string | number;
}
export interface ActionType {
  actionName : string;
}
export interface RunContainerProps {
  repo: RepositoryParams; 
  runId: string; 
  onSelectAction: (action: ActionType | null | string) => void; 
  selectedAction: ActionType | null | string; 
}
export interface RunRowProps {
  repo: RepositoryParams;
  run: Run;
  onFilterBranch: (branch: string) => void;
  onFilterCommit: (commitId: string) => void;
}
export interface RunTableProps {
  repo: RepositoryParams;
  runs: Run[];
  nextPage: string | boolean | null | undefined;
  after: string;
  onPaginate:(after: any) => void | (() => void);
  onFilterBranch: (branch: string) => void;
  onFilterCommit: (commitId: string) => void;
}
export interface ActionsListProps {
  repo: RepositoryParams;
  after: string | undefined;
  onPaginate:(after: any) => void | (() => void);
  branch: string;
  commit: string;
  onFilterBranch: (branch: string) => void;
  onFilterCommit: (commitId: string) => void;
}

export interface Commit {
  id: string;
  message: string;
  committer: string;
  creation_date: number;
}

export interface CommitWidgetProps {
  repo: RepositoryParams;
  commit: Commit;
}
export interface CommitsBrowserProps {
  repo: RepositoryParams;
  reference: Reference;
  after: string;
  onPaginate:(after: any) => void | (() => void);
  onSelectRef: (ref: any) => void; 
}