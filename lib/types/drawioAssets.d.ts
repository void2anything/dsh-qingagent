import type { IncomingMessage, ServerResponse } from 'node:http';
export declare const DRAWIO_ROUTE_PATH = "/drawio";
export declare const DEFAULT_DRAWIO_VENDOR_ROOT: string;
export declare const DRAWIO_DOCUMENT_CSP: string;
export declare function serveDrawioAsset(request: IncomingMessage, response: ServerResponse, vendorRoot?: string): Promise<void>;
//# sourceMappingURL=drawioAssets.d.ts.map