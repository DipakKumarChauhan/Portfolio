# Quick Reference - Error Handling Usage

## 🎯 Most Common Use Cases

### 1. Render Icons Safely
```jsx
import SafeIcon from "../utils/SafeIcon";

// Simple usage
<SafeIcon Icon={FiArrowUpRight} iconName="arrow" className="text-2xl" />

// With custom fallback
<SafeIcon 
  Icon={social.Icon} 
  iconName={`social-${social.name}`}
  className="text-2xl"
  fallback={<span>Icon unavailable</span>}
/>
```

### 2. Iterate Arrays Safely
```jsx
import { safeMap } from "../utils/safeRenderer";

// Safe mapping with error handling
{safeMap(projects, (project) => (
  <ProjectCard key={project.id} {...project} />
))}
```

### 3. Access Nested Properties Safely
```jsx
import { safeGet } from "../utils/safeRenderer";

// Never throws undefined errors
const email = safeGet(user, "contact.email.primary", "N/A");
const city = safeGet(address, "location.city", "Unknown");
```

### 4. Protect Major Sections
```jsx
// In App.jsx
import ErrorBoundary from './utils/ErrorBoundary';

<ErrorBoundary componentName="MySection">
  <MySection />
</ErrorBoundary>
```

---

## 📋 File Locations

| Utility | Location | Purpose |
|---------|----------|---------|
| `ErrorBoundary` | `src/utils/ErrorBoundary.jsx` | Catch React component errors |
| `SafeIcon` | `src/utils/SafeIcon.jsx` | Safe icon rendering |
| `Icon Utils` | `src/utils/iconUtils.js` | Icon validation helpers |
| `Safe Renderer` | `src/utils/safeRenderer.js` | Data handling utilities |

---

## 🔗 Import Statements

```jsx
// Error Boundary
import ErrorBoundary from '../utils/ErrorBoundary';

// Safe Icon (most common)
import SafeIcon from '../utils/SafeIcon';

// Safe data utilities
import { safeMap, safeGet, renderComponentSafe } from '../utils/safeRenderer';

// Icon validation helpers (advanced)
import { isValidIconComponent, renderIconSafeHelper } from '../utils/iconUtils';
```

---

## ⚠️ What NOT to Do Anymore

```jsx
// ❌ OLD - Direct icon rendering (can crash)
<Icon className="text-2xl" />

// ❌ OLD - Unsafe array mapping (errors break loop)
{items.map(item => <Item {...item} />)}

// ❌ OLD - Unsafe property access (undefined errors)
const email = user.contact.email.primary;

// ❌ OLD - Unprotected components
<ComponentThatMightFail />
```

---

## ✅ What to Do Now

```jsx
// ✅ NEW - Safe icon rendering
<SafeIcon Icon={Icon} iconName="my-icon" className="text-2xl" />

// ✅ NEW - Safe array mapping
{safeMap(items, (item) => <Item {...item} />)}

// ✅ NEW - Safe property access
const email = safeGet(user, "contact.email.primary", "N/A");

// ✅ NEW - Protected components
<ErrorBoundary componentName="MyComponent">
  <ComponentThatMightFail />
</ErrorBoundary>
```

---

## 🐛 Debugging

### Check Browser Console
When an error occurs, you'll see:
```
[IconWarning] Icon "my-icon" is not defined. Using fallback.
[SafeIcon] Error rendering "social-github": ...
[IconError] Failed to render icon "arrow": ...
```

### Check Development Mode Error UI
- Shows error message
- Shows component stack (expandable)
- Provides "Try Again" button for recovery

### Production Mode
- User-friendly error message only
- Detailed errors in console only
- Doesn't scare users with technical details

---

## 🚀 Performance Tips

1. **Use SafeIcon for all icons** - Minimal overhead
2. **Use safeMap() for dynamic lists** - Prevents breaking on bad data
3. **Use ErrorBoundary for risky sections** - Isolates failures
4. **Use safeGet() for nested data** - Prevents null reference errors

All utilities are optimized and have minimal performance impact.

---

## 📞 Common Patterns in Your App

### Rendering Social Icons (Contact, Navbar)
```jsx
<SafeIcon 
  Icon={social.Icon} 
  iconName={`social-${social.name}`}
  className="text-2xl"
/>
```

### Rendering Project Cards (Works)
```jsx
<SafeIcon 
  Icon={FiArrowUpRight} 
  iconName="works-arrow"
  className="md:size-6 size-5"
/>
```

### Marquee Icons
```jsx
<SafeIcon 
  Icon={Icon} 
  iconName={`marquee-icon-${index}`} 
  className={iconClassName} 
/>
```

---

## ✨ Already Implemented In

- ✅ `App.jsx` - All 8 major sections wrapped with ErrorBoundary
- ✅ `Marquee.jsx` - SafeIcon for star icons
- ✅ `Contact.jsx` - SafeIcon for social icons
- ✅ `Navbar.jsx` - SafeIcon for social icons
- ✅ `Works.jsx` - SafeIcon for arrow icons

Ready to use across the app!

---

## 📖 For More Details

- See `ERROR_HANDLING_GUIDE.md` for comprehensive documentation
- See `IMPLEMENTATION_SUMMARY.md` for what was implemented
- Check source files for inline JSDoc comments
