interface RequestLike {
  headers?: Record<string, string | string[] | undefined>;
}

/**
 * Detects browser fetch/XHR submissions so auth endpoints can respond with JSON
 * (for inline error handling) instead of the default HTML redirect flow.
 */
export function wantsJsonResponse(request: RequestLike): boolean {
  const headers = request.headers ?? {};
  const requestedWith = headers['x-requested-with'];
  const normalizedRequestedWith = Array.isArray(requestedWith) ? requestedWith[0] : requestedWith;

  if (normalizedRequestedWith && normalizedRequestedWith.toLowerCase() === 'fetch') {
    return true;
  }

  const contentType = headers['content-type'];
  const normalizedContentType = Array.isArray(contentType) ? contentType[0] : contentType;

  return Boolean(normalizedContentType && normalizedContentType.includes('application/json'));
}
