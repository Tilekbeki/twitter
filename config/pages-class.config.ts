//второй вариант
class PagesConfig {
    PROFILE(username: string) {
        return `/profile/${username}`
    }
}

export const PAGES = new PagesConfig()