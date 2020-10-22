export const activeRoute = (route: string, url: string): boolean => {
  return url === route;
}

export const activeParent = (route: string, url: string): boolean => {
  return url.includes(route);
}
