import "dotenv/config";

const PAGE_URL = process.env.PAGE_URL || "http://localhost:5000";

export class PaginationDto {
    limit;
    offset;
    nextPage;
    total;
}

export class Pagination {
    limitRegex = /limit=\d+/;
    offsetRegex = /offset=\d+/;

    parseLimit(limit) {
        return !isNaN(parseInt(limit)) ? parseInt(limit) : 1;
    }

    parseOffset(offset) {
        return !isNaN(parseInt(offset)) ? parseInt(offset) : 0;
    }

    buildPaginationDto(limit, currentOffset, total, path, filters) {
        const response = new PaginationDto();
        response.limit = limit;
        response.offset = currentOffset;
        response.total = total;
        if (limit !== -1) {
            response.nextPage =
                limit + currentOffset < total
                    ? this.buildNextPage(path, limit, currentOffset, filters)
                    : null;
        }

        return response;
    }

    buildNextPage(path, limit, currentOffset, filters) {
        let url = PAGE_URL + path;
        if (this.limitRegex.test(url)) {
            url = url.replace(this.limitRegex, `limit=${limit}`);
        } else {
            url = `${url}${url.includes("?") ? "&" : "?"}limit=${limit}`;
        }

        // Agrega filtros a la URL
        for (const key in filters) {
            if (filters[key]) {
                url += `${url.includes("?") ? "&" : "?"}${key}=${filters[key]}`;
            }
        }

        return url + `&offset=${currentOffset + limit}`; // Asegúrate de incluir el nuevo offset
    }
}
