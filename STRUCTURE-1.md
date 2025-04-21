src/
├── app/
│   ├── core/                          # Singleton services & app-wide utilities
│   │   ├── services/                  # Global services (e.g., RecipeService)
│   │   ├── interceptors/
│   │   ├── guards/
│   │   ├── models/                    # Shared types/interfaces
│   │   └── core.module.ts

│   ├── shared/                        # Reusable UI components and utilities
│   │   ├── components/                # E.g., Button, Card
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.module.ts

│   ├── pages/                         # Pages tied to routes
│   │   ├── home/                      # /home
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   └── home.module.ts
│   │   ├── recipes/                   # /recipes
│   │   │   ├── components/            # e.g., recipe-list, recipe-detail
│   │   │   ├── recipes.component.ts
│   │   │   ├── recipes.module.ts
│   │   │   └── recipes-routing.module.ts
│   │   ├── about/                     # /about
│   │   │   └── about.component.ts

│   ├── layout/                        # App shell
│   │   ├── header/
│   │   ├── footer/
│   │   └── layout.module.ts

│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts

├── assets/
│   ├── images/
│   └── mock-data/

├── environments/
│   ├── environment.ts
│   └── environment.prod.ts

├── styles/
│   └── theme.scss

├── main.ts
└── index.html
